export function sanitizeTwCls(
  cls: string | undefined,
  defaultCls = ""
): string {
  if (!cls) {
    return defaultCls;
  }
  console.log("Sanitized class:", cls);
  return cls.replaceAll(" ", "__");
}
