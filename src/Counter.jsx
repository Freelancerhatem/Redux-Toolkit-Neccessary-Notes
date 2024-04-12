import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/features/counter'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className='h-screen bg-red-50 flex justify-center items-center'>
            <div className='flex gap-5'>
                <button
                    className='text-3xl font-bold bg-green-300 p-2 rounded-md'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span className='text-3xl bg-green-300 w-20 text-center p-2 rounded-md'>{count}</span>
                <button
                    className='text-3xl font-bold bg-green-400 rounded-md p-2' 
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}