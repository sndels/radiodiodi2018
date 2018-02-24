const fetch = require('node-fetch');
const Router = require('koa-router');
const models = require('./models');

const router = new Router();

const admin = new Router();

const verifyUrl = token => `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`;
const checkAuthorization = async (ctx, next) => {
  const auth = ctx.headers.authorization;

  if (!auth) {
    ctx.throw(400, 'No authorization header present.');
    return;
  }

  const url = verifyUrl(auth);
  const resp = await fetch(url);
  const json = await resp.json();

  if (json.error_description) {
    ctx.throw(400, JSON.stringify({
      error: json.error_description,
    }));
    return;
  }

  await next();
}

admin.get('/messages', async ctx => {
  const messages = await models.messages.find({}, {
    limit: 300, sort: { timestamp: 1 },
  });

  ctx.body = JSON.stringify({
    messages,
  });
  ctx.type = 'application/json';
});

router.use('/admin', checkAuthorization, admin.routes(), admin.allowedMethods());

router.get('/', (ctx, next) => {
  ctx.body = 'Radiodiodi JSON API';
});

router.get('/auth', checkAuthorization, async ctx => {
  ctx.body = '';
  ctx.status = 200;
  return;
});

router.get('/stats', async ctx => {
  const options = {
    'sort': [['time','desc']] 
  };

  try {
    const results = listeners.find();

    const arr = [];
    const mountpoints = _.groupBy(results, (r) => r.name);

    Object.keys(mountpoints).forEach((m) => {
      const obj = {
          'x': mountpoints[m].map((r) => r.time),
          'y': mountpoints[m].map((r) => r.listeners),
          'type': 'scatter',
          'line': {'shape': 'spline'},
          'name': m
      };
      arr.push(obj);
    });

    ctx.body = JSON.stringify({
      listeners: arr,
    });
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
    return;
  }
});

router.get('/inspirational-quote', async ctx => {
  ctx.body = `Kukkakaalia - kakkakuulia: hauska munansaannos`;
});

module.exports = router;