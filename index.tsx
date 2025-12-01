import React from 'react'

// Next.js page (pages/index.tsx) or standalone React component
// TailwindCSS is used for styling (no external colors specified)
// This file is a starting index page that reproduces a modern dashboard
// layout (sidebar, topbar, stat cards, activity list, product cards, table)
// Replace images and real data where needed.

export default function DashboardIndex() {
  const stats = [
    { title: 'Visitas', value: '12.482', delta: '+8.2%'},
    { title: 'Pedidos', value: '428', delta: '+3.4%'},
    { title: 'Conversão', value: '3.4%', delta: '-0.2%'},
    { title: 'Receita', value: 'R$ 24.390', delta: '+12%'},
  ]

  const products = [
    { id: 1, name: 'Óculos Solar Classic', price: 'R$ 199', stock: 24 },
    { id: 2, name: 'Óculos de Grau Modern', price: 'R$ 249', stock: 12 },
    { id: 3, name: 'Óculos Infantil', price: 'R$ 129', stock: 8 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r hidden md:flex flex-col">
        <div className="p-6 border-b">
          <div className="text-xl font-bold">Marca</div>
          <div className="text-sm text-gray-500">Painel Administrativo</div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a className="flex items-center gap-3 p-3 rounded-md bg-gray-100" href="#">Dashboard</a>
          <a className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50" href="#">Pedidos</a>
          <a className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50" href="#">Produtos</a>
          <a className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50" href="#">Clientes</a>
          <a className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50" href="#">Marketing</a>
          <a className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50" href="#">Configurações</a>
        </nav>
        <div className="p-4 border-t">
          <div className="text-xs text-gray-500">Assinado por</div>
          <div className="mt-2 text-sm font-medium">Equipe de Suporte</div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6">
        {/* TOPBAR */}
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Visão geral</h1>
            <p className="text-sm text-gray-500">Resumo das métricas principais</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-white border rounded-full px-3 py-1 shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <input className="ml-2 outline-none text-sm" placeholder="Pesquisar..." />
            </div>
            <button className="bg-white border p-2 rounded-md">Notificações</button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <div className="text-sm">Admin</div>
            </div>
          </div>
        </header>

        {/* STAT CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((s) => (
            <div key={s.title} className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-xs text-gray-500">{s.title}</div>
              <div className="mt-2 flex items-baseline justify-between">
                <div className="text-2xl font-semibold">{s.value}</div>
                <div className="text-sm text-green-600">{s.delta}</div>
              </div>
              <div className="mt-3 text-xs text-gray-400">Comparado aos últimos 30 dias</div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Chart + Recent activity */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-medium">Visitas por dia</h2>
                  <p className="text-xs text-gray-500">Últimos 30 dias</p>
                </div>
                <div className="text-sm text-gray-500">Exportar</div>
              </div>
              <div className="h-48 flex items-center justify-center text-gray-400">[Gráfico de linha - placeholder]</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Atividades recentes</h3>
                <span className="text-xs text-gray-500">Ver tudo</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-gray-100" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Novo pedido #1234</div>
                    <div className="text-xs text-gray-500">2 horas atrás — R$ 199</div>
                  </div>
                  <div className="text-sm text-gray-500">Status: Pago</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-gray-100" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Avaliação recebida</div>
                    <div className="text-xs text-gray-500">4 horas atrás — 5 estrelas</div>
                  </div>
                  <div className="text-sm text-gray-500">Cliente: Maria</div>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Products / Quick actions */}
          <aside className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h4 className="font-medium mb-3">Produtos em destaque</h4>
              <div className="space-y-3">
                {products.map(p => (
                  <div key={p.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-md" />
                      <div>
                        <div className="text-sm font-medium">{p.name}</div>
                        <div className="text-xs text-gray-500">{p.price}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">Estoque: {p.stock}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h4 className="font-medium mb-3">Ações rápidas</h4>
              <div className="flex flex-col gap-2">
                <button className="p-2 border rounded">Adicionar produto</button>
                <button className="p-2 border rounded">Criar promoção</button>
                <button className="p-2 border rounded">Enviar newsletter</button>
              </div>
            </div>
          </aside>
        </div>

        {/* TABLE */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Últimos pedidos</h3>
            <div className="text-xs text-gray-500">Mostrando 5 de 200</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs text-gray-500 text-left">
                <tr>
                  <th className="py-2">Pedido</th>
                  <th className="py-2">Cliente</th>
                  <th className="py-2">Valor</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Data</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-3">#1234</td>
                  <td className="py-3">Ana</td>
                  <td className="py-3">R$ 199</td>
                  <td className="py-3">Pago</td>
                  <td className="py-3">2025-11-20</td>
                </tr>
                <tr>
                  <td className="py-3">#1233</td>
                  <td className="py-3">Carlos</td>
                  <td className="py-3">R$ 249</td>
                  <td className="py-3">Enviado</td>
                  <td className="py-3">2025-11-19</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  )
}
