import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed mb-6">
                I'm a 19-year-old technology enthusiast currently pursuing my B.Tech
                degree in Computer Science Engineering with a specialization in
                Artificial Intelligence and Machine Learning.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in tech started with web development, where I gained
                proficiency in HTML, CSS, Python, and Flask. I'm passionate about
                combining traditional web development with cutting-edge AI/ML
                technologies to create innovative solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
