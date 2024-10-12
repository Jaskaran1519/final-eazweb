export default function Stats() {
    return <div className="w-[90%] my-20 mx-auto max-w-[1000px] border-t-3 border-zinc-800 pt-10">
        <div className="flex flex-col md:flex-row justify-center items-center">
            {/* Stat items */}
            <StatItem number="25+" text="Happy Customers" className="pr-16" />
            <StatItem number="6K+" text="Hours spent on work" className="px-32 border-x-2 border-zinc-800" />
            <StatItem number="4.7" text="Star reviews" className="pl-16" />
        </div>
    </div>
}

function StatItem({ number, text, className = '' }: { number: string, text: string, className?: string }) {
    return (
        <div className={`flex flex-col space-y-7 text-center ${className}`}>
            <h1 className="text-6xl font-bold bg-gradient-to-t from-zinc-400 to-zinc-200 text-transparent bg-clip-text">
                {number}
            </h1>
            <h1 className="bg-gradient-to-t from-zinc-400 to-zinc-200 text-transparent bg-clip-text">
                {text}
            </h1>
        </div>
    )
}
