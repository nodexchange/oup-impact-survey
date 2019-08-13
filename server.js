const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
// import serve= require('koa-static';
const views = require('koa-views');
const serve = require('koa-static');
const path = require('path');
const packageJson = require('./package.json');

/* use as desired */
const nameParts = packageJson.name.split('-');
const contentName = nameParts[nameParts.length - 1];

const app = new Koa()
  .use(cors())
  .use(serve('./public/'))
  .use(views(path.resolve(__dirname, 'views'), {
    map: {
      hbs: 'handlebars',
    },
    extension: 'hbs',
    options: {
      partials: {
        contentType: `./${contentName}`,
      },
    },
  }));

const router = new Router()
  .get('/', async (ctx) => {
    await ctx.render('preview', {
      pageTitle: 'OUP HE Flashcard',
      env: 'localhost-debug',
    });
  });

app.use(router.routes());
app.listen(3707);
console.log('KOA locahost is LIVE === >>> 3707');
