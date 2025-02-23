module first_system(out1, out2, in1, in2);

    // port definitions
    input in1, in2;
    output out1, out2;

    // dataflow modeling

    assign out1 = (in1 & in2) ^ (in1 | in2);
    assign #(10) out2 = ~in2; // out2 delay 10 ns ( in2 changes wait 10ns then out2 change)

endmodule