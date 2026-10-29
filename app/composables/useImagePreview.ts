// The screenshot shown full size in the preview dialog (ImagePreview.vue, mounted once in app.vue).
// Pages open it from a framed screenshot (ScreenShot.vue) or a screenshot in the docs.
export interface PreviewImage {
  dark: string
  light: string
  width: number
  height: number
  alt: string
}

export function useImagePreview() {
  const image = useState<PreviewImage | null>('image-preview', () => null)
  return {
    image,
    open: (next: PreviewImage) => { image.value = next },
    close: () => { image.value = null },
  }
}
