using WebSocketSharp;
using System;
using System.Windows.Forms;
using System.Text.Json;
namespace WinFormsApp
{
    public partial class Form1 : Form
    {
        private WebSocket ws;
        public Form1()
        {
            InitializeComponent();
            ws = new WebSocket("ws://localhost:1979"); 
            ws.OnMessage += (sender, msg) => {
                this.Invoke((Action)delegate {
                    receiveText.Text =  msg.Data;
                });
            };
            ws.Connect();
        }

        private void button1_Click(object sender, EventArgs e)
        {            
            string message = JsonSerializer.Serialize(sendText.Text);
            ws.Send(message);
            sendText.Text = "";
        }
    }
}