import { h, app } from 'hyperapp'
import cc from 'classcat'

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const view = (state, actions) => (
  <div class="h-full flex items-center justify-center">
    <button
      class={cc([
        'w-8 h-8 text-grey-light',
        {
          'cursor-not-allowed': !state.count
        }
      ])}
      disabled={!state.count}
      onclick={() => actions.down(1)}
    >
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd">
        <path d="M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z M15,9 L15,11 L5,11 L5,9 L15,9 Z" />
      </svg>
    </button>
    <h1 class="text-5xl mx-8">{state.count}</h1>
    <button class="w-8 h-8 text-grey-light" onclick={() => actions.up(1)}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd">
        <path d="M11,9 L11,5 L9,5 L9,9 L5,9 L5,11 L9,11 L9,15 L11,15 L11,11 L15,11 L15,9 L11,9 Z M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z" />
      </svg>
    </button>
  </div>
)

app(state, actions, view, document.body)