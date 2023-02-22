var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/{num}", (int num) => $"This is a secret route! Here is your number {num}");

app.Run();
