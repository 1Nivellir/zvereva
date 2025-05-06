
const { $api } = useNuxtApp()
export const fetchImageBlob = async (imageId: string | null) => {
  if (!imageId) return null
  const response = await $api(`file/${imageId}`)
  const blob = new Blob([response as any], {
    type: 'image/jpeg',
  })
  const url = URL.createObjectURL(blob)
  return url
}