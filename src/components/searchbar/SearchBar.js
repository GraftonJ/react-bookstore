import React from 'react'

export default class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor='Book'>Search:
          <input type='text'></input>
        </label>
      </form>
    )
  }
}
