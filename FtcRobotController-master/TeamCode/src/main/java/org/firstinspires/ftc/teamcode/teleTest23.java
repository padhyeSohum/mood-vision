package org.firstinspires.ftc.teamcode;
import org.firstinspires.ftc.robotcore.external.hardware.camera.WebcamName;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.hardware.DcMotorEx;
import com.qualcomm.robotcore.hardware.DcMotorSimple;
import com.qualcomm.robotcore.hardware.Servo;

import org.firstinspires.ftc.vision.VisionPortal;
import org.firstinspires.ftc.vision.apriltag.AprilTagDetection;
import org.firstinspires.ftc.vision.apriltag.AprilTagProcessor;

@TeleOp(name = "teleTest23")
public class teleTest23 extends LinearOpMode {
    private DcMotorEx Right_Front;
    private DcMotorEx Right_Rear;
    private DcMotorEx Left_Front;
    private DcMotorEx Left_Rear;
    private Servo left_servo;
    private Servo right_servo;
    double x;
    double y;
    double rx;
    double constant = 0.73; //speed reduction

    @Override
    public void runOpMode() {
        AprilTagProcessor tagProcessor = new AprilTagProcessor.Builder()
                .setDrawTagOutline(true)
                .build();

        VisionPortal visionPortal = new VisionPortal.Builder()
                .addProcessor(tagProcessor)
                .setCamera(hardwareMap.get(WebcamName.class,"WebCam 1"))
                .build();
        Right_Front = hardwareMap.get(DcMotorEx.class, "rightFront");
        Right_Rear = hardwareMap.get(DcMotorEx.class, "rightRear");
        Left_Front = hardwareMap.get(DcMotorEx.class, "leftFront");
        Left_Rear = hardwareMap.get(DcMotorEx.class, "leftRear");
        left_servo = hardwareMap.servo.get("LeftServo");
        right_servo = hardwareMap.servo.get("RightServo");
        Right_Front.setDirection(DcMotorSimple.Direction.REVERSE);
        Right_Rear.setDirection(DcMotorSimple.Direction.REVERSE);

        waitForStart();

        if (opModeIsActive()) {
            while (!isStopRequested() && opModeIsActive()) {
                //moving the wheels
                y = gamepad1.left_stick_y;
                x = -gamepad1.left_stick_x * 1.1;
                rx = -gamepad1.right_stick_x;
                Left_Front.setPower((y + x + rx) * constant);
                Left_Rear.setPower((y - x + rx) * constant);
                Right_Front.setPower((y - x - rx) * constant);
                Right_Rear.setPower((y + x - rx) * constant);

                if(tagProcessor.getDetections().size() > 0)
                {
                    AprilTagDetection tag = tagProcessor.getDetections().get(0);
                    telemetry.addData("x", tag.ftcPose.x);
                    telemetry.addData("y", tag.ftcPose.y);
                    telemetry.addData("z", tag.ftcPose.z);
                    while(tag.ftcPose.z > -5 && tag.ftcPose.z < -0.1 )
                    {
                        Left_Front.setPower((y + x + rx) * constant*(tag.ftcPose.z));
                        Left_Rear.setPower((y - x + rx) * constant*(tag.ftcPose.z));
                        Right_Front.setPower((y - x - rx) * constant*(tag.ftcPose.z));
                        Right_Rear.setPower((y + x - rx) * constant*(tag.ftcPose.z));
                    }
                }

                telemetry.update();
            }
        }
    }
}