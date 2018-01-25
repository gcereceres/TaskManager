import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actionCreators } from './listRedux'
import List from './List'
import Input from './Input'
import Title from './Title'

const mapStateToProps = (state) => ({
  todos: state.todos,
})

class App extends Component {

    getTasks(){
        const {dispatch} = this.props

        fetch('/api/task')
        .then(res => res.json())
        .then(tasks => {
            dispatch(actionCreators.setInitialTasks(tasks.tasks))
        });
    }

  onAddTodo = (text) => {
    const {dispatch} = this.props

    dispatch(actionCreators.add(text))

    fetch('/api/task', {  
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            task: {
                name: text
            },
        })
    })
  }

  onRemoveTodo = (taskName) => {
    const {dispatch} = this.props

    //dispatch(actionCreators.remove(index))
    fetch(`/api/task/delete/${taskName}`, {  
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
  }

  render() {
      this.getTasks();
    const {todos} = this.props

    return (
      <div style={styles.container}>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onClickItem={this.onRemoveTodo}
        />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}

export default connect(mapStateToProps)(App)