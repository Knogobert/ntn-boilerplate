export const useFormatDate = (dateString) => {
  if (typeof dateString !== 'string') return dateString;
  const runtimeConfig = useRuntimeConfig();
  return new Date(dateString).toLocaleDateString(runtimeConfig.public.lang) || ''
}
