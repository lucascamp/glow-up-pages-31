const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-heading text-lg font-bold text-foreground">Tellar</p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Grupo Tellar. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
