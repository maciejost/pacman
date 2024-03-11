import { Game } from './Game'

export default function GameLayout() {
	return (
		<html>
			<head>
				{/* <script src='build/app.js'></script> */}
				<title>Pacman</title>
			</head>

			<body>
				<div id='overflow-mask' className='overflow-mask'>
					<img
						id='backdrop'
						className='backdrop'
						src='style/graphics/backdrop.png'
					/>

					<div id='fps-display' className='fps-display'></div>
					<div id='preload-div' className='preload-div'></div>

					<div
						id='main-menu-container'
						className='main-menu-container'
					>
						<img
							id='logo'
							className='logo'
							src='style/graphics/pacman_logo.png'
						/>
						<button id='game-start' className='game-start'>
							PLAY
						</button>
					</div>

					<div className='header-buttons'>
						<button>
							<i id='pause-button' className='material-icons'>
								pause
							</i>
						</button>
						<button>
							<i id='sound-button' className='material-icons'></i>
						</button>
					</div>

					<div id='paused-text' className='paused-text'>
						PAUSED
					</div>

					<div id='game-ui' className='game-ui'>
						<div id='row-top' className='row top'>
							<div className='column _25'>
								<div className='one-up'>1UP</div>
								<div id='points-display'></div>
							</div>
							<div className='column _50'>
								<div>HIGH SCORE</div>
								<div id='high-score-display'></div>
							</div>
						</div>

						<div id='maze' className='maze'>
							<img
								id='maze-img'
								className='maze-img'
								src='style//graphics/spriteSheets/maze/maze_blue.svg'
							/>
							<div id='maze-cover' className='maze-cover'></div>
							<div id='dot-container'></div>
							<p id='pacman' className='pacman'></p>
							<p id='pacman-arrow' className='pacman'></p>
							<p id='clyde' className='ghost'></p>
							<p id='inky' className='ghost'></p>
							<p id='pinky' className='ghost'></p>
							<p id='blinky' className='ghost'></p>
						</div>

						<div id='bottom-row' className='row bottom'>
							<div id='extra-lives' className='extra-lives'></div>
							<div
								id='fruit-display'
								className='fruit-display'
							></div>
						</div>
					</div>

					<div id='movement-buttons' className='movement-buttons'>
						<div className='row'>
							<button id='button-up' className='button-up'>
								<i className='material-icons'>
									keyboard_arrow_up
								</i>
							</button>
						</div>
						<div className='row'>
							<button id='button-left' className='button-left'>
								<i className='material-icons'>
									keyboard_arrow_left
								</i>
							</button>
							<button id='button-right' className='button-right'>
								<i className='material-icons'>
									keyboard_arrow_right
								</i>
							</button>
						</div>
						<div className='row'>
							<button id='button-down' className='button-down'>
								<i className='material-icons'>
									keyboard_arrow_down
								</i>
							</button>
						</div>
					</div>

					<div id='left-cover' className='loading-cover left'></div>
					<div id='right-cover' className='loading-cover right'></div>
					<div id='loading-container' className='loading-container'>
						<div
							id='loading-pacman'
							className='loading-pacman'
						></div>
						<div
							id='loading-dot-mask'
							className='loading-dot-mask'
						></div>
						<div className='loading-dot _5'></div>
						<div className='loading-dot _10'></div>
						<div className='loading-dot _15'></div>
						<div className='loading-dot _20'></div>
						<div className='loading-dot _25'></div>
						<div className='loading-dot _30'></div>
						<div className='loading-dot _35'></div>
						<div className='loading-dot _40'></div>
						<div className='loading-dot _45'></div>
						<div className='loading-dot _50'></div>
						<div className='loading-dot _55'></div>
						<div className='loading-dot _60'></div>
						<div className='loading-dot _65'></div>
						<div className='loading-dot _70'></div>
						<div className='loading-dot _75'></div>
						<div className='loading-dot _80'></div>
						<div className='loading-dot _85'></div>
						<div className='loading-dot _90'></div>
						<div className='loading-dot _95'></div>
					</div>
					<Game />
				</div>
			</body>
		</html>
	)
}
