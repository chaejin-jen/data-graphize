export const omitUndefinedProps = (props: Record<string, any> | undefined) =>
  props
    ? Object.fromEntries(
        Object.entries(props).filter(([key, value]) => value !== undefined),
      )
    : {};
