export default function ({ id, created, karma, about }) {
  return (
    <table border="0">
      <tbody>
        <tr>
          <td valign="top">user:</td>
          <td>
            <a href={`/user?id=${id}`}>jonahss</a>
          </td>
        </tr>
        <tr>
          <td valign="top">created:</td>
          <td>
            {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(
              created
            )}
          </td>
        </tr>
        <tr>
          <td valign="top">karma:</td>
          <td>{karma}</td>
        </tr>
        <tr>
          <td valign="top">about:</td>
          <td style={{ overflow: 'hidden' }}>{about}</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <a href="submissions?id=jonahss">
              <u>submissions</u>
            </a>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <a href="comments?id=jonahss">
              <u>comments</u>
            </a>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <a href="favorites?id=jonahss">
              <u>favorites</u>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
