type Props = {
  src: string
  caption: string
}
export function CenterFigure(p: Props) {
  return (
    <div className="mt-8 flex w-full flex-col items-center justify-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={p.src} alt={p.caption} className="my-0 rounded-lg shadow-2xl" />
      <figcaption className="m-0">{p.caption}</figcaption>
    </div>
  )
}
