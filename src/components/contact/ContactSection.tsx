import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

interface ContactSectionProps {
  officeLocation?: {
    address: string;
    coordinates: { lat: number; lng: number };
  };
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
}

const ContactSection = ({
  officeLocation = {
    address: "123 Architecture Ave, Los Angeles, CA 90001",
    coordinates: { lat: 34.0522, lng: -118.2437 },
  },
  contactInfo = {
    email: "contact@modernarchitects.com",
    phone: "+1 (555) 123-4567",
    address: "123 Architecture Ave, Los Angeles, CA 90001",
  },
}: ContactSectionProps) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="w-full bg-gray-50 py-24 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Let's discuss your next architectural project and bring your vision
            to life
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="p-8 bg-white shadow-lg border-0">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="mb-6 rounded-full bg-green-100 p-3">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6"
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full min-h-[150px]"
                        required
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Office Location"
                width="100%"
                height="100%"
                frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBgjjO5ZGN-zWmhK-5QnUDTGGP-QVtlEJE&q=${officeLocation.address.replace(/ /g, "+")}`}
                allowFullScreen
                className="filter grayscale"
              />
            </div>

            <Card className="p-8 bg-white shadow-lg border-0">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-gray-100 p-3">
                    <Mail className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-gray-100 p-3">
                    <Phone className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-gray-100 p-3">
                    <MapPin className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
