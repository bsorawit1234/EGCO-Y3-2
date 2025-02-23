module first_system(out1, out2, in1, in2);
    // port definitions
    input in1, in2;
    output out1, out2;

    // behavioural modeling
    
    reg out1, out2;
    initial begin // when start simulate T=0 like init()
        out1 = 0;
        out2 = 0;
    end

    always @(in1, in2) begin // monitor in1, in2 if (in1, in2) change 
        out1 = (in1 & in2) ^ (in1 | in2);
        out2 = ~in2;
    end
endmodule