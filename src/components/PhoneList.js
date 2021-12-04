import React from 'react'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '25px'
  },
  table: {
    borderCollapse: 'collapse',
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
  },
}

const PhoneList = (props) => {
    const sortContacts = props.users.sort((a,b) => a.lastName.localeCompare(b.lastName))
  return (
    <div style={style.container}>
      <table style={style.table}>
        <thead>
          <tr>
            <th style={style.tableCell}>First Name</th>
            <th style={style.tableCell}>Last Name</th>
            <th style={style.tableCell}>Phone Number</th>
          </tr>
        </thead>
        <tbody>
            {sortContacts.length > 0 ? (
                sortContacts.map((user, index) => (
                    <tr key={index}>
                        <td style={style.tableCell}>{user.firstName}</td>
                        <td style={style.tableCell}>{user.lastName}</td>
                        <td style={style.tableCell}>{user.phoneNumber}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>&nbsp;</td>
                </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default PhoneList
