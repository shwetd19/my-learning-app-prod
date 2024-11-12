"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MessageSquare,
  Mic,
  Camera,
  Brain,
  Zap,
  Users,
  ChevronDown,
} from "lucide-react";

export default function Component() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 sticky top-0 bg-black/80 backdrop-blur-sm z-50">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">AI Learning Assistant</div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-400 hover:text-white transition-colors"
            >
              How it works
            </a>
            <a
              href="#testimonials"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#faqs"
              className="text-gray-400 hover:text-white transition-colors"
            >
              FAQs
            </a>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-gray-300">Learn Smarter with</span>
          <br />
          <span className="text-[#DAFF00]">AI-Powered Assistance</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Experience personalized learning through conversation, voice, and
          visual interaction. Your AI tutor adapts to your unique learning style
          and pace.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <FeatureIcon
            icon={<MessageSquare className="w-6 h-6" />}
            text="Chat"
          />
          <FeatureIcon icon={<Mic className="w-6 h-6" />} text="Voice" />
          <FeatureIcon icon={<Camera className="w-6 h-6" />} text="Visual" />
        </div>

        <div className="max-w-md mx-auto mb-16">
          <p className="text-gray-400 text-sm mb-6">
            Be among the first to experience the future of learning. Sign up for
            early access and exclusive updates!
          </p>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="bg-gray-900 border border-gray-800 text-white placeholder:text-gray-500 rounded-full px-4 py-2 w-64"
              required
            />
            <Button
              type="submit"
              className="bg-[#DAFF00] text-black hover:bg-[#EBFF4D] px-6 rounded-full"
            >
              Get Early Access
            </Button>
          </form>
        </div>

        {/* Demo Video Placeholder */}
        <div className="max-w-3xl mx-auto aspect-video bg-gray-900 rounded-lg relative cursor-pointer group overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-[#DAFF00] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquare className="w-10 h-10 text-black ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <p className="text-lg font-semibold">
              Watch how our AI Assistant revolutionizes learning
            </p>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-12 h-12 text-[#DAFF00]" />}
              title="Personalized Learning Paths"
              description="Our AI adapts to your learning style, creating custom curricula tailored just for you."
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-[#DAFF00]" />}
              title="Multi-Modal Interaction"
              description="Learn through text, voice, or visual inputs - whatever suits your preference and the subject matter."
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-[#DAFF00]" />}
              title="Collaborative Learning"
              description="Connect with peers and form study groups, all facilitated by our AI to maximize learning outcomes."
            />
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Sign Up & Assess"
              description="Create your account and complete an initial assessment to gauge your knowledge and learning style."
            />
            <StepCard
              number="2"
              title="Engage & Learn"
              description="Interact with your AI tutor through chat, voice, or visual inputs. Ask questions, solve problems, and explore topics in-depth."
            />
            <StepCard
              number="3"
              title="Review & Improve"
              description="Receive personalized feedback, track your progress, and continuously refine your learning path."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What Our Learners Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="The AI Assistant's ability to explain complex topics in multiple ways has dramatically improved my understanding of difficult subjects."
              author="Alex K., Computer Science Student"
            />
            <TestimonialCard
              quote="Being able to learn through voice interactions while I'm on the go has made studying so much more convenient and effective for me."
              author="Samantha L., Business Professional"
            />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <FAQItem
              question="How does the AI Assistant personalize my learning experience?"
              answer="Our AI analyzes your learning style, pace, and preferences through your interactions. It then tailors the content, difficulty, and teaching methods to best suit your individual needs."
            />
            <FAQItem
              question="Can I use the AI Assistant for any subject?"
              answer="Yes! Our AI is trained on a vast array of subjects and can assist with learning in fields ranging from mathematics and sciences to languages and humanities."
            />
            <FAQItem
              question="Is my learning data kept private and secure?"
              answer="Absolutely. We prioritize the privacy and security of our users. All your learning data is encrypted and used solely to improve your personal learning experience."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-[#DAFF00]">
        <div className="container mx-auto px-2 text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Join the waitlist and be among the first to experience the future of
            education.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg">
            Get Early Access
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2024 AI Learning Assistant. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureIcon({ icon, text }: { icon: JSX.Element; text: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-2">
        {icon}
      </div>
      <span className="text-sm text-gray-400">{text}</span>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg text-center">
      <div className="w-12 h-12 bg-[#DAFF00] text-black rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <ChevronDown className="w-8 h-8 text-[#DAFF00] mb-4" />
      <p className="text-lg mb-4">"{quote}"</p>
      <p className="text-gray-400">- {author}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-400">{answer}</p>
    </div>
  );
}
