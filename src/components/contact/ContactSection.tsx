import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

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
  return (
    <section className="w-full min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="p-8 bg-gray-50">
              <form className="space-y-6">
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="w-full"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="w-full"
                  />
                  <Input type="text" placeholder="Subject" className="w-full" />
                  <Textarea
                    placeholder="Your Message"
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                title="Office Location"
                width="100%"
                height="100%"
                frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${officeLocation.coordinates.lat},${officeLocation.coordinates.lng}`}
                allowFullScreen
                className="filter grayscale"
              />
            </div>

            <Card className="p-8 bg-gray-50">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gray-600 mt-1" />
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
