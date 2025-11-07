export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">@MyFolder</h1>
      <p>Welcome to my notebook portfolio — click the side tabs to explore.</p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="border p-4 text-center shadow-sm">Acid-Monitor-Motion.psdt</div>
        <div className="border p-4 text-center shadow-sm">love.jpg</div>
        <div className="border p-4 text-center shadow-sm">need.jpg</div>
        <div className="border p-4 text-center shadow-sm">DesignBodega_mailer.png</div>
      </div>
    </div>
  );
}
