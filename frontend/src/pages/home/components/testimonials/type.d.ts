type Item = {
  id: number
  name: string
  image: string
  role: string
  content: string
}

export type CarouselCustomProps = {
  items: Item[]
  renderCardContent: (item: Item, isActive: boolean) => React.ReactNode
  className?: string
}

export type Testimonial = {
  id: number
  name: string
  role: string
  content: string
  image: string
}
