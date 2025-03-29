import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container px-4 py-32 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              alt="Shahil Singh Rawat"
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-primary/20"
            />
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Shahil Singh Rawat
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Aspiring AI/ML Engineer & Full Stack Developer
          </p>

          <div className="flex justify-center gap-4">
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </a>
    </section>
  );
}
