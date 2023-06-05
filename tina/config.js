import { defineConfig } from 'tinacms';
import { pagesFields } from './templates';

const slugify = function (str) {
  if (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    var to = 'aaaaeeeeiiiioooouuuunc------';
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
  }

  return str;
};

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: 'dist'
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'dist'
    }
  },
  schema: {
    collections: [
      // TODO: this is a bug, need to report with TinaCMS
      {
        format: 'md',
        label: 'Pages',
        name: 'pages',
        path: 'src',
        match: {
          include: '{en,es}/*'
        },
        fields: [...pagesFields()]
        // ui: {
        //   filename: {
        //     slugify: (values) => {
        //       console.log(values);
        //       return slugify(values?.title);
        //     }
        //   }
        // }
      }
    ]
  }
});
