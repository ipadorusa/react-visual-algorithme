import Head from 'next/head'
import InsertionSort from '../components/insertionSort'
import BubbleSort from '../components/bubbleSort'
import QuickSort from '../components/quickSort'

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Study react</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
        <h2 className="title">BOARD</h2>
				<InsertionSort />
        <BubbleSort />
        <QuickSort />
			</main>
      <style jsx>
        {`
          .title	{
            font-size:30px;
          }
        `}
      </style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}

				* {
					box-sizing: border-box;
        }
        .sub_title {
          font-size:25px;
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
