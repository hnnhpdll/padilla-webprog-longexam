const Footer = () => {
  return (
    <div className="border-t-2 border-yellow-400 bg-blue-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-white sm:flex-row sm:items-center sm:justify-between">
        
        {/* Brand */}
        <div>
          <p className="text-lg font-bold text-yellow-400">
            BulldogEx Shop
          </p>
          <p className="mt-1 text-sm text-blue-200">
            Campus essentials, simple ordering.
          </p>
        </div>

        {/* Links */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow-300">
          Products | Cart | Pickup
        </p>

      </div>
    </div>
  )
}

export default Footer;