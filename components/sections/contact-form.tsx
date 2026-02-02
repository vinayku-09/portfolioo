"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@/shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContactForm() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContactMessage) => {
    setIsPending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to send message');
      }

      toast({
        title: "Transmission Sent",
        description: "Your message has been received by the system.",
        className: "bg-background/90 border-primary/50 text-primary",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Transmission Failed",
        description: error instanceof Error ? error.message : 'Failed to send message',
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-lg mx-auto bg-background/40 border border-foreground/10 p-8 rounded-2xl backdrop-blur-md relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      
      <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 text-foreground">
        <span className="w-2 h-8 bg-primary rounded-full" />
        INITIALIZE CONTACT
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-mono uppercase text-xs">Identity</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter Name" 
                    {...field} 
                    className="bg-background/50 border-foreground/10 focus:border-primary/50 font-mono"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-mono uppercase text-xs">Comms Channel</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="name@example.com" 
                    {...field} 
                    className="bg-background/50 border-foreground/10 focus:border-primary/50 font-mono"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-mono uppercase text-xs">Subject</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Project Inquiry" 
                    {...field} 
                    className="bg-background/50 border-foreground/10 focus:border-primary/50 font-mono"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-mono uppercase text-xs">Data Packet</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter your message..." 
                    {...field} 
                    className="bg-background/50 border-foreground/10 focus:border-primary/50 font-mono min-h-[120px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-4 rounded-lg bg-primary/10 border border-primary/50 text-primary font-bold font-display tracking-widest hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
          >
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                TRANSMIT DATA <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </Form>
    </motion.div>
  );
}
