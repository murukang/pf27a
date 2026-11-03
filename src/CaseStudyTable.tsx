type TableProps = { title: string; headings: string[]; rows: string[][] }
export default function BenefitTable({ title, headings, rows }: TableProps) {
  return <div className="case-table-wrap" role="region" aria-label={title} tabIndex={0}><table className="case-table"><caption>{title}</caption><thead><tr>{headings.map(heading => <th scope="col" key={heading}>{heading}</th>)}</tr></thead><tbody>{rows.map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={index}>{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>
}
