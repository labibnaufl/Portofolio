export function Footer() {
  return (
    <footer className="w-full py-12 bg-neutral-950 border-t border-white/10 text-center text-sm text-neutral-500">
      <div className="container mx-auto px-6">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
