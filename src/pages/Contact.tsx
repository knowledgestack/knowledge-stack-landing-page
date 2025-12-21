import ContentLayout from "@/layouts/ContentLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Mail, MessageSquare, Building, User } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  
  const contactSchema = z.object({
    name: z.string().min(2, t("contact.nameError")),
    email: z.string().email(t("contact.emailError")),
    company: z.string().optional(),
    subject: z.string().min(5, t("contact.subjectError")),
    message: z.string().min(10, t("contact.messageError")),
  });

  type ContactFormValues = z.infer<typeof contactSchema>;
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // In a real application, this would send to your backend API
      // For now, we'll use mailto as a fallback or you can integrate with EmailJS/Formspree
      const mailtoLink = `mailto:info@knowledgestack.ai?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "N/A"}\n\nMessage:\n${data.message}`
      )}`;
      
      // For production, replace this with actual API call:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      
      // Temporary: Open mailto link
      window.location.href = mailtoLink;
      
      toast.success(t("contact.successToast"));
      form.reset();
    } catch (error) {
      toast.error(t("contact.errorToast"));
      console.error(error);
    }
  };

  return (
    <ContentLayout>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6">{t("contact.title")}</h1>
              <p className="text-xl text-muted-foreground">
                {t("contact.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("contact.email")}</h3>
                    <p className="text-muted-foreground">info@knowledgestack.ai</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("contact.support")}</h3>
                    <p className="text-muted-foreground">{t("contact.supportDesc")}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Building className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("contact.sales")}</h3>
                    <p className="text-muted-foreground">{t("contact.salesDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <User className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("contact.responseTime")}</h3>
                    <p className="text-muted-foreground">{t("contact.responseTimeDesc")}</p>
                  </div>
                </div>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.name")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.namePlaceholder")} {...field} />
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
                        <FormLabel>{t("contact.emailLabel")}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t("contact.emailPlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.company")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("contact.companyPlaceholder")} {...field} />
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
                      <FormLabel>{t("contact.subject")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("contact.subjectPlaceholder")} {...field} />
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
                      <FormLabel>{t("contact.message")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("contact.messagePlaceholder")}
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        {t("contact.messageDescription")}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" size="lg">
                  {t("contact.sendMessage")}
                </Button>
              </form>
            </Form>
          </div>
    </ContentLayout>
  );
};

export default Contact;

