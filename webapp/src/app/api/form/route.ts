import { NextRequest, NextResponse } from "next/server";
import { Strapi } from "../../../utils/strapi";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    console.log("Formulário recebido:", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    await Strapi.public("form-leads", {
      method: "POST",
      body: JSON.stringify({
        data: {
          email: data.email,
          nome: data.nome,
          telefone: data.telefone,
          nome_empresa: data.empresa,
          qtd_colaboradores: data.colaboradores,
          cidade: data.cidade,
          tipo_transporte: data.tipo_transporte,
          qtd_filiais: data.filiais,
          trabalhou_fretado_transporte_funcionarios: data.experiencia_fretados,
          detalhes_operacao: data.detalhes,
        },
      }),
    });

    return NextResponse.json(
      { message: "Formulário enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar formulário:", error);

    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
