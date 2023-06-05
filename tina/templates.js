import en from '../src/_data/i18n/en.json';

export function translationFields() {
  const codes = Object.keys(en).map((code) => {
    return {
      type: 'string',
      name: code,
      label: code,
      component: code.includes('_desc') ? 'textarea' : 'text'
    };
  });

  return codes;
}

export function pagesFields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'title',
      isTitle: true,
      required: true
    },
    {
      type: 'boolean',
      name: 'draft',
      label: 'Draft',
      description: 'If this is checked, the story will not be published'
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      description:
        'The main body text of your story. You can use markdown formatting.',
      isBody: true
    },
    {
      type: 'string',
      name: 'layout',
      label: 'Layout',
      description: 'Type of page layout this page should have.',
      list: true,
      options: ['page', 'stories', 'members', 'principles'],
      component: 'select'
    }
  ];
}
