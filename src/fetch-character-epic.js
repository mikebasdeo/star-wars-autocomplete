import { ajax } from 'rxjs/ajax'
import { ofType } from 'redux-obervable'

import { map, mergeMap } from 'rxjs/operators'
import { FETCH_CHARACTERS } from './actions'
