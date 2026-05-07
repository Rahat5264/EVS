const posts = [
  {
    date: 'April 23, 2026',
    title: 'AI Vision in Modern Textile Inspection',
    description:
      'Revolutionizing textile inspection with AI for faster quality control and defectless production.',
  },
  {
    date: 'April 21, 2026',
    title: 'Reducing Quality and Compliance Risk in Pharmaceutical Manufacturing',
    description:
      'Minimizing risk and enhancing compliance through AI-driven visual inspection.',
  },
  {
    date: 'April 21, 2026',
    title: 'Why Manual Inspection Is No Longer Scalable in High-Speed Manufacturing',
    description:
      'AI-driven inspection delivers accuracy at high-speed production lines.',
  },
]

export default function NewsUpdates() {
  return (
    <section className="bg-[#323d4f] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-[12px] font-medium text-white/80">News & Updates</p>
            <h2 className="text-[36px] font-normal text-white">Industry Insights</h2>
          </div>
          <a
            href="#"
            className="inline-flex h-9 items-center rounded bg-white/90 px-5 text-[11px] font-semibold text-[#1f2a3a] transition-colors duration-200 hover:bg-[#7da7ff] hover:text-white sm:w-auto"
          >
            Explore all news
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-5 md:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group border-r-0 border-white/10 pr-0 transition-transform duration-200 hover:-translate-y-1 md:border-r md:pr-5"
            >
              <p className="mb-3 text-[11px] text-white/45 transition-colors duration-200 group-hover:text-[#9fbfff]">{post.date}</p>
              <h3 className="mb-3 text-[24px] font-normal leading-[1.15] text-white transition-colors duration-200 group-hover:text-[#7da7ff]">
                {post.title}
              </h3>
              <p className="mb-4 text-[12px] leading-[1.45] text-white/58 transition-colors duration-200 group-hover:text-white/78">
                {post.description}
              </p>
              <span className="inline-flex rounded-sm border border-white/20 px-3 py-1 text-[10px] text-white/80 transition-colors duration-200 group-hover:border-[#7da7ff] group-hover:text-[#7da7ff]">
                Read more
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
