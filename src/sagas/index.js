import {takeEvery, put, call, all} from 'redux-saga/effects'
import HotelsService from '../services/hotels-service'
import {hotelsLoaded, hotelsRequested, hotelsError} from '../actions'

const hotelsService = new HotelsService()


export function* watchApiLoad(){
    yield takeEvery('FETCH_HOTELS', onApiLoad)
}

function* onApiLoad(action){
    try{
        yield put(hotelsRequested())
        const payload = yield call(fetchHotels, action.payload)
        yield put(hotelsLoaded(payload))
        
    }catch(e){
        yield put(hotelsError(e))
    }
}

async function fetchHotels (state) {
    const searchParams = hotelsService.getSearchParams(state)   
    return await hotelsService.getItems(`?${searchParams}`)
}

export default function* apiRootSaga() {
    yield all([
        watchApiLoad()
    ])
}