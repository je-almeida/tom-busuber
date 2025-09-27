"use client";

import { CheckIcon, Loader, XIcon } from "lucide-react";
import { useState } from "react";

export interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
  helper?: string;
  options?: string[];
}

interface ContactFormProps {
  id?: string;
  active?: boolean;
  title: string;
  subtitle: string;
  fields: FormField[];
  submitText: string;
  primaryColor: string;
  secondaryColor: string;
  $bgColor?: string;
}

export default function ContactForm(data: ContactFormProps) {
  const {
    id,
    active,
    title,
    subtitle,
    fields,
    submitText,
    primaryColor,
    secondaryColor,
    $bgColor,
  } = data;
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checkbox.checked ? "true" : "false",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({
          text: "Formulário enviado com sucesso!",
          type: "success",
        });
        setFormData({});
      } else {
        setMessage({
          text: "Erro ao enviar formulário. Tente novamente.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Erro:", error);
      setMessage({
        text: "Erro ao enviar formulário. Tente novamente.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderField = (field: FormField) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      required: field.required,
      value: formData[field.name] || "",
      onChange: handleChange,
      className:
        "w-full px-3 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:border-transparent",
      style: { borderColor: "#ddd", fontSize: "16px" },
    };

    switch (field.type) {
      case "select":
        return (
          <select {...commonProps}>
            <option value="">Selecione</option>
            {field.options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            {...commonProps}
            rows={4}
            style={{
              ...commonProps.style,
              resize: "vertical" as const,
            }}
          />
        );

      default:
        return (
          <input
            {...commonProps}
            type={field.type}
            placeholder={field.placeholder}
          />
        );
    }
  };

  if (active === false) {
    return null;
  }

  return (
    <section className="py-16" style={{ background: $bgColor }} id={id}>
      <div className="container mx-auto px-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm"
        >
          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-6" id="contato">
            {fields.map((field, index) => {
              // Check if this field should be in a flex row with the next field
              const isEmailField = field.name === "email";
              const isTelefoneField = field.name === "telefone";

              const shouldRenderInRow =
                isEmailField && fields[index + 1]?.name === "telefone";

              const isSecondInRow = isTelefoneField;

              if (isSecondInRow) {
                return null; // Skip rendering, will be rendered with previous field
              }

              return (
                <div key={field.name}>
                  {shouldRenderInRow ? (
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* First field */}
                      <div className="flex-1 min-w-0">
                        <label
                          htmlFor={field.name}
                          className="block mb-2 font-semibold text-gray-700"
                        >
                          {field.label} {field.required && "*"}
                        </label>
                        {field.helper && (
                          <small className="block mb-2 text-sm text-gray-500">
                            {field.helper}
                          </small>
                        )}
                        {renderField(field)}
                      </div>

                      {/* Second field */}
                      <div className="flex-1 min-w-0">
                        {fields[index + 1] && (
                          <>
                            <label
                              htmlFor={fields[index + 1].name}
                              className="block mb-2 font-semibold text-gray-700"
                            >
                              {fields[index + 1].label}{" "}
                              {fields[index + 1].required && "*"}
                            </label>
                            {fields[index + 1].helper && (
                              <small className="block mb-2 text-sm text-gray-500">
                                {fields[index + 1].helper}
                              </small>
                            )}
                            {renderField(fields[index + 1])}
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label
                        htmlFor={field.name}
                        className="block mb-2 font-semibold text-gray-700"
                      >
                        {field.label} {field.required && "*"}
                      </label>
                      {field.helper && (
                        <small className="block mb-2 text-sm text-gray-500">
                          {field.helper}
                        </small>
                      )}
                      {renderField(field)}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="px-10 py-4 text-white font-bold rounded-lg text-lg transition-colors hover:opacity-90 disabled:opacity-50"
                style={{
                  backgroundColor: primaryColor || "black",
                  color: secondaryColor || "white",
                }}
              >
                {isLoading ? <Loader className="animate-spin" /> : submitText}
              </button>
              {message && (
                <p
                  className={`mt-4 text-sm ${
                    message.type === "error" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {message.text}{" "}
                  {message.type === "success" && (
                    <CheckIcon color="green" className="inline-block ml-1" />
                  )}
                  {message.type === "error" && (
                    <XIcon color="red" className="inline-block ml-1" />
                  )}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
