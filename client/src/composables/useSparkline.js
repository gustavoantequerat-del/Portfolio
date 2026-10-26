// Convierte una serie de valores en un path SVG suavizado.
export function sparklinePath(values, width, height, pad = 4) {
  if (!values?.length) return { line: '', area: '' }
  const min = Math.min(...values)
  const max = Math.max(...values)
  const span = max - min || 1
  const pts = values.map((v, i) => [
    (i / (values.length - 1)) * width,
    pad + (1 - (v - min) / span) * (height - pad * 2)
  ])
  let line = `M${pts[0][0]},${pts[0][1]}`
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1]
    const [x1, y1] = pts[i]
    const cx = (x0 + x1) / 2
    line += ` C${cx},${y0} ${cx},${y1} ${x1},${y1}`
  }
  return { line, area: `${line} L${width},${height} L0,${height} Z` }
}
