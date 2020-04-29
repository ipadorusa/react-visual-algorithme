import { range, shuffle } from 'lodash'
import { useState, SetStateAction, FC } from 'react'

const SIZE = 10;
const HSIZE = 500;
const getArr = () => shuffle(range(1,30))

const delaySetArr = (arr: number[], setArr: (value: SetStateAction<number[]>) => void) => {
  return new Promise((resolve) => {
    setArr([...arr])
    setTimeout(resolve, 10);
  })
}
const sort = async (arr: number[], setArr: (value: SetStateAction<number[]>) => void) => {
  let length = arr.length;
  let i, j, temp;
  for (i = 0; i < length - 1; i++) {
    for (j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {        
        temp = arr[j];
        arr[j] = arr[j + 1];
        await delaySetArr(arr, setArr);
        arr[j + 1] = temp;
      }
    }
  }
  return arr;

}

export default () => {
  const [arr, setArr] = useState(getArr())

  const handleShuffled = () => {
    setArr(getArr())
  }
  
  const handleSort = () => {
    const sortedArr = [...arr];
    sort(sortedArr, setArr)
    setArr(sortedArr)
  }
  
  interface IPropsBar {
    value: number
    idx: number
  }
  const Bar: FC<IPropsBar> = (props) => {
    const { value, idx } = props
    const style = { height: value * 10, transform: `translateX(${idx*11}px)`}
    return (
      <div>
        <div className="bar" style={style} />
      </div>
    )
  }

	return (
		<div>
			
      <h3 className="sub_title">Bubble Sort</h3>
			<div className="board">
        {arr.map((value, i) => <Bar key={i} value={value} idx={i} />)}
			</div>
			<div className="wrap_btn">
				<button type='button' className="btn" onClick={handleShuffled}>shuffle</button>
				<button type='button' className="btn" onClick={handleSort}>sort</button>
			</div>
			<style jsx>{`
				.board {
					background:blue;
					width:100%;
          height:300px;
          position:relative;
				}
				.wrap_btn {
					text-align:right;
				}
				.btn {
					width:100px;
					height:50px;
        }
        .bar {
          position: absolute;
          bottom:0;
          width:10px;
          background-color:black;
        }
			`}</style>
		</div>
	)
}
