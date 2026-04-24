const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border py-10 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-accent font-serif font-bold text-xl mb-4">
          Sabores do Front
        </p>

        <div className="text-muted-foreground text-sm space-y-1">
          <p className="font-bold text-foreground">Integrantes do Grupo:</p>
          <p>Lucas de Souza Dudena - RM: 567600</p>
          <p>Pedro Begali Campos - RM: 567478</p>
        </div>

        <p className="mt-6 text-xs text-gray-400 italic">
          &copy; 2026 - Checkpoint 05 - FIAP
        </p>
      </div>
    </footer>
  );
};

export default Footer;
