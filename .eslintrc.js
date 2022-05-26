/* eslint-disable spellcheck/spell-checker */
/* eslint-env node */
/* eslint-disable quote-props */

// eslint-disable-next-line import/no-extraneous-dependencies
const spellcheckRule = require('eslint-config-devextreme/spell-check').rules[
  'spellcheck/spell-checker'
];

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  plugins: ['spellcheck', 'no-only-tests'],
  rules: {
    'no-return-await': 0,
    'spellcheck/spell-checker': (() => {
      Array.prototype.push.apply(spellcheckRule[1].skipWords, [
        'acc', // DXHotelsNetApi\Client\views\currentHotel.js ?
        'accessor',
        'adaptivity',
        'adrs',
        'africa',
        'ajax',
        'antialiasing',
        'api',
        'ar', // arabic
        'arabic',
        'arg',
        'argb', // ExcelJS
        'args',
        'asia',
        'assignee',
        'assignees',
        'async',
        'attr',
        'attrs',
        'aug',
        'autocomplete',
        'axios',
        'backorder',
        'backordered', // DevAV NetCore
        'bing',
        'bkg',
        'bool',
        'bg', // ExcelJS
        'br', // <br> tag in html
        'Cldr',
        'canada',
        'ceil',
        'checkbox',
        'childs',
        'cityid',
        'cluster',
        'cnstl',
        'colorizer',
        'comparer',
        'concat',
        'coord',
        'coords',
        'cordova',
        'cpu',
        'crosshair',
        'ctrl',
        'datebox',
        'de',
        'ru',
        'democase',
        'democases',
        'desc',
        'dest', // gulp
        'dev', // DevAV
        'devexpress',
        'devextremeaddon',
        'dialogs',
        'docurl',
        'draggable',
        'dropzone',
        'dto',
        'dx',
        'dxkey', // for React templates
        'emp',
        'evt',
        'english',
        'etalon',
        'etalons',
        'eurasia',
        'europe',
        'european',
        'exe',
        'expr',
        'fav',
        'faved',
        'femalemiddle',
        'femaleolder',
        'femaleyoung',
        'filename', // DXHotelsNetApi\Client\views\booking.js from db
        'fitted',
        'fg', // ExcelJS
        'formatter',
        'fs',
        'func',
        'gantt',
        'gdp', // gross domestic product
        'geolocation',
        'getter',
        'getters',
        'globals',
        'mapGetters',
        'gif',
        'goto',
        'guid',
        'holydays',
        'hotelid',
        'href',
        'html',
        'http',
        'https',
        'ie',
        'iframe',
        'img',
        'init',
        'inited',
        'ity', // DXHotelsNetApi\Client\views\home.js  CIty_Image from db
        'Fmt', // ExcelJS
        'jan',
        'js',
        'jspdf',
        'jszip',
        'jsonp',
        'jsserver',
        'jul',
        'july',
        'jun',
        'june',
        'Kanban',
        'lang',
        'latinamerica',
        'len',
        'li',
        'lng',
        'loc',
        'lookups',
        'longtabs',
        'malemiddle',
        'maleolder',
        'maleyoung',
        'maximumfractiondigits',
        'metadata',
        'mmp',
        'monday',
        'msg',
        'multiline',
        'mvc',
        'na', // NaN
        'namespace',
        'nav',
        'nbsp',
        'nd',
        'nighly', // DXHotelsNetApi\Client\views\booking.js from db
        'noop',
        'northamerica',
        'num',
        'objs',
        'occured',
        'oceania',
        'ok',
        'olympic',
        'onclick',
        'onhashchange',
        'onreadystatechange',
        'orderby',
        'pageview',
        'pangaea',
        'param',
        'params',
        'perc',
        'perf',
        'pdf',
        'pid',
        'pids',
        'pivotgrid',
        'png', // DataGrid CustomEditors for image format
        'popup',
        'popups',
        'pos',
        'postfix',
        'prec',
        'pregrouped',
        'prepend',
        'prev',
        'rangebar',
        'readdir', // node js
        'realtor',
        'rect',
        'req',
        'resellers',
        'resize',
        'resizing',
        'roomid',
        'rowspan',
        'rtl',
        'sankey',
        'sclass', // CSSClass
        'scrollable',
        'scrollbar',
        'setted',
        'skype',
        'smp',
        'sonee',
        'sortable',
        'sparkline',
        'splashscreen',
        'splinearea',
        'sqlite',
        'sqrt',
        'src',
        'stacktrace',
        'startswith',
        'steparea',
        'stepline',
        'str',
        'stringify',
        'strikethrough',
        'subdir',
        'submenu',
        'substr',
        'substring',
        'subtree',
        'subvalue',
        'subvalues',
        'svg',
        'swfobject',
        'tbody',
        'th',
        'td',
        'theatre',
        'timestamp',
        'tmp',
        'toogle',
        'tooltip',
        'tooltips',
        'transpile',
        'transpiler',
        'treeview',
        'ui', // User Interface
        'ul',
        'ungrouped',
        'unlink',
        'unordered',
        'unselect', // unselectAll()
        'unshift',
        'uploader',
        'uri',
        'urlencoded',
        'usa',
        'util',
        'utils',
        'validator',
        'viewport',
        'volumne', // stockMarket, rename to volume
        'vue',
        'winloss',
        'writeable', // knockout
        'xlsx', // ExcelJS
        'xhr',
        'Xmla',
        'xmla',
        'youtube',
        'ytd',
        'zipcode',
        'Serializer', // XMLSerializer
        // VectorMap Demos
        'Kosovo',
        'Macau',
        'Niue',
        'Palau',
      ]);
      return spellcheckRule;
    })(),
    'class-methods-use-this': 0, // TODO warn (was error)
    'func-names': 0, // TODO warn (was warn) >500
    'import/extensions': 0,
    'no-use-before-define': 0,
    'prefer-destructuring': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-only-tests/no-only-tests': 'error',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: true,
        allowAnonymousClass: true,
        allowAnonymousFunction: true,
        allowCallExpression: true, // The true value here is for backward compatibility
        allowLiteral: true,
        allowObject: true,
      },
    ],
  },
  extends: [
    'eslint:recommended',
    'devextreme/javascript',
    'devextreme/spell-check',
  ],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['devextreme/typescript'],
      parserOptions: {
        project: './packages/angular/tsconfig.json',
        createDefaultProgram: true,
        ecmaVersion: 6,
      },
      rules: {
        // TODO consider this rules
        eqeqeq: 0,
        'no-plusplus': 0,
        'max-len': 0,
        'max-classes-per-file': 0,
        'consistent-return': 0,
        'import/extensions': 0,
        'import/no-webpack-loader-syntax': 0,
        'no-restricted-properties': 0,
        'no-restricted-globals': 0,
        'spellcheck/spell-checker': 0,
        'no-mixed-operators': 0,
        'no-useless-concat': 0,
        'no-self-assign': 0,
        'default-case': 0,
        'no-var': 0,
        'no-return-assign': 0,
        'vars-on-top': 0,
        'no-sequences': 0,
        'new-cap': 0,
        'no-param-reassign': 0,
        'no-multi-assign': 0,
        'no-restricted-syntax': 0,
        'prefer-rest-params': 0,
        radix: 0,
        'no-underscore-dangle': 0,
        'operator-assignment': 0,
        'prefer-const': 0,
        'no-console': 'off',
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/no-throw-literal': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-shadow': 0,
        '@typescript-eslint/no-loop-func': 0,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-unused-expressions': 0,
        '@typescript-eslint/no-useless-constructor': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0, // was warn
        '@typescript-eslint/indent': 0,
        'implicit-arrow-linebreak': 0,
        'import/no-duplicates': 0,
        'no-return-await': 0,
        indent: [
          'error',
          2,
          {
            SwitchCase: 1,
            MemberExpression: 1,
            CallExpression: {
              arguments: 1,
            },
          },
        ],
      },
    },
    {
      files: [
        'packages/angular/*.*',
        'packages/shell/*.*',
      ],
      env: {
        jquery: true,
      },
      globals: {
        DevExpress: true,
      },
    },
    {
      files: [
        'utils/*.*',
      ],
      env: {
        jquery: true,
      },
      globals: {
        DevExpress: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 0,
        'no-console': 0,
      },
    },
  ],
};
