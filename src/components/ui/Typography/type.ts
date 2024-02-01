type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subheading1'
  | 'subheading2'
  | 'body1'
  | 'body2'
  | 'item'
  | 'list'
  | 'orderedList'
  | 'blockquote';

type TypographySize =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'header-large'
  | 'header-medium'
  | 'header-small'
  | 'title-large'
  | 'title-medium'
  | 'body-large'
  | 'label-prominent-large'
  | 'title-small'
  | 'label-large'
  | 'body-medium'
  | 'label-prominent-medium'
  | 'label-medium'
  | 'body-small'
  | 'label-small';

type TypographyStyle = 'blockquote';

export type { TypographyVariant, TypographySize, TypographyStyle };

const variantsMapping: Record<TypographyVariant, keyof HTMLElementTagNameMap> =
  {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subheading1: 'h6',
    subheading2: 'h6',
    body1: 'p',
    body2: 'p',
    item: 'li',
    list: 'ul',
    orderedList: 'ol',
    blockquote: 'blockquote',
  } as const;
const classMapping: Record<
  TypographyVariant,
  TypographySize | TypographyStyle
> = {
  h1: 'header-large',
  h2: 'header-medium',
  h3: 'header-small',
  h4: 'title-large',
  h5: 'title-medium',
  h6: 'title-small',
  subheading1: 'label-prominent-large',
  subheading2: 'label-large',
  body1: 'body-large',
  body2: 'body-medium',
  item: 'body-small',
  list: 'body-small',
  orderedList: 'label-medium',
  blockquote: 'blockquote',
} as const;

export { variantsMapping, classMapping };
