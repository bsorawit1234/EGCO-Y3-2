// Code your testbench here
// or browse Examples
module test;
    `include "parameters.vh"
  
    wire [0:3] op;
    wire [0:15] in1, in2;  
    wire [0:15] expected;  
    wire [0:15] out;       
  
    reg clk = 0;
    always #5 clk = !clk;
    
    wire [8:0] total = 9;
    reg [8:0] num = 0;

    reg [0:3+WORD_SIZE*3] Testset [0:8];
    assign op = Testset[num][0:3];         
    assign in1 = Testset[num][4:19];       
    assign in2 = Testset[num][20:35];      
    assign expected = Testset[num][36:51]; 
  
  	alu alu1(clk, op, in1, in2, 1, out);
    
    always @(negedge clk) begin
        if (num < total)
            $display("op = %d, in1 = %d, in2 = %d, expected = %d, out = %d, ok = %d",
                    op, in1, in2, expected, out, (expected == out));
        else
            $stop;
        num <= num + 1;
    end

endmodule