import * as games from "@/lib/game/data.json";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col p-6 gap-6">
			<h1 className="text-3xl font-bold">Video Games Release Tracker</h1>

			{/* Search */}
			<div className="flex gap-4">
				<input
					type="text"
					placeholder="Enter title or description"
					className="flex-grow p-2 rounded bg-slate-900 text-slate-50"
				/>
				<button className="p-2 rounded bg-green-500">Search</button>
			</div>

			{/* Tags filter */}
			<div className="flex gap-2 overflow-auto">
				<button className="p-2 rounded bg-slate-900 text-slate-50">
					Action
				</button>
				<button className="p-2 rounded bg-slate-900 text-slate-50">
					Adventure
				</button>
				<button className="p-2 rounded bg-slate-900 text-slate-50">RPG</button>
				<button className="p-2 rounded bg-slate-900 text-slate-50">
					Strategy
				</button>
				<button className="p-2 rounded bg-slate-900 text-slate-50">
					Simulation
				</button>
				<button className="p-2 rounded bg-slate-900 text-slate-50">
					Sports
				</button>
				<button className="p-2 rounded bg-slate-900 text-slate-50">
					Racing
				</button>
				<button className="p-2 rounded bg-slate-900 text-slate-50">
					Puzzle
				</button>
			</div>

			{/* Games */}
			<div className="grid grid-cols-auto gap-4">
				{games.map((game) => (
					<div key={game.id} className="p-4 bg-slate-900 rounded space-y-2">
						<div className="flex">
							<h2 className="text-lg font-semibold grow">{game.title}</h2>
							<div>${game.price}</div>
						</div>
						<p>{game.releaseDate}</p>
						<div className="text-sm text-slate-400">
							<p>{game.rating}</p>
							<p>{game.description}</p>
							<p>{game.tags}</p>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
