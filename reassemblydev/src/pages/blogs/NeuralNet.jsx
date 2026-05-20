import "../../index.css"
import Chapter from "../../components/decoration/Chapter"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Box from "../../components/decoration/Box";

function NeuralNetBlog() {
    return (
        <>
        <body>
            <div className="page">
                <div className="title">
                    An idiot's attempt of making a neural net from scratch
                </div>

                <Chapter title="Chapter 0: Disclaimer">
                    <h2>Please note that I am NOT an expert in neural networks or Machine Learning. While I take great care in providing factual and useful information on my blogs, I may give examples and explanations that are oversimplified or just flat out incorrect. If they are then I am sorry and please contact me (if you can) with feedback to fix misinformation.</h2>
                    <p>Furthermore, I only came up with the idea to write a blog after finishing the project, therefore I did not take backups of my work during the process. Any code I present here before the final version is what I remade from memory. I'll also be trimming out the minor bug fixes and focus on the main hurdles and optimizations I made. I'll be posting the final version on my <a href="https://github.com/TrueReassembly">GitHub</a></p>
                </Chapter>

                <Chapter title="Chapter 1: The Inspiration">
                    <p>I grew up watching a lot of CodeBullet videos on YouTube. I'd always watch him throw around these weird terms like "NEAT", "Genetic Algorithms" and "Neural Network". Being the ever-so-ambitious 12-year-old, I made it my mission to code a neural network on my own.</p>
                    <p>Back then, I defined "on my own" as following a tutorial on how to code a genetic algorithm. Sure, it worked and I was proud of it back then but that doesn't really count. Ultimately, I realised that I didn't have the skill level to code something this complex and I shelved the project.</p>
                    <h2 className="centeredText">Until 7 years passed...</h2>
                    <p>I'm 19 now, I've been in university for a few years, this semester is starting to come to a close and I'm looking for something to occupy my mind with. Lo and behold, I find an article on the XOR problem with perceptrons (I have no idea what the exact article is). I'm reading this article and I'm seeing all these graphs and diagrams and getting a little confused...</p>
                    <p>Oh wait! One of my current module tutors also runs the Machine Learning module next year, I'll ask him after the tutorial.</p>
                    <p>I do that, we end up going to his office and he runs me through what the XOR problem is and what it means for neural networks. After learning about the problem more, I thought it was about time to do 12-year-old me proud and finally code a neural network from scratch.</p>
                </Chapter>

                <Chapter title="Chapter 2: The XOR Problem">
                    <p>Before we look at the XOR problem, let's look at the AND gate. In case you don't know what an AND gate is, an AND gate is a little black box of circuit wizardry that takes in two inputs A and B (which can either be 0 or 1), then outputs 1 if both A and B are 1, otherwise it outputs 0. Let me draw this on a diagram:</p>
                    <img src="../../../blogs/neural-net/ANDGateGraph.webp" width="250px" height="250px"></img>
                    <p>The pink line here is a perceptron (some call it a neuron, it's essentially an individual braincell of the network). The perceptron is trying to separate the ticks and the crosses, the trues and falses. With an AND gate here, this is very easy to do, try drawing the same line for an OR gate and you'll get the same result.</p>
                    <p>Moving onto the XOR gate, the XOR gate takes in two inputs A and B, and outputs 1 if either A or B is 1, but not both. In other words, if A and B are different we output 1 otherwise we output 0.</p>
                    <p>Now, let me draw an XOR gate graph:</p>
                    <img src="../../../blogs/neural-net/XORGateGraph1.webp" width="250px" height="250px"></img>
                    <p>Here's a challenge for you, you are now a perceptron. Please draw a single straight line that completely separates the ticks from the crosses...</p>
                    <p>You'll quickly find that this is an impossible task, one perceptron on its own cannot correctly predict (classify) an XOR gate. If we want our perceptron to classify the XOR gate, we will need multiple neurons working together. Let's add another perceptron:</p>
                    <img src="../../../blogs/neural-net/XORGateGraph2.webp" width="250px" height="250px"></img>
                    <Box header="Note">
                        <p>While I say we're adding a single perceptron, we're actually adding a whole layer of perceptrons to the network. A single perceptron feeding its outputs into another single perceptron will still not carry the depth required to solve the XOR problem. So at this point in the example we have a network with two hidden layers and two perceptrons per layer.</p>
                    </Box>
                    <p>Awesome! Our ticks and crosses have been seperated. Now we can make this more accurate by adding more layers of perceptrons but this is where neural networks start to get very confusing as the lines we drew are actually hyperplanes that are slicing the graph in an ever-increasing number of dimensions and I struggle to visualize how that works but the math does check out.</p>
                </Chapter>

                <Chapter title="Chapter 3: Starting the project">
                    <p>Before I code the network, I need to start at the fundamentals. So I chose to start by coding a single perceptron. Perceptrons are surprisingly simple given what they can do when you pile them together. At the basic level, all a perceptron does is:</p>
                    <ol>
                        <li>Define some random weights for a given amount of inputs it receives</li>
                        <li>Multiply its inputs by those weights</li>
                        <li>Sum up the weighted inputs together</li>
                        <li>Pass that sum through an activation function to get the output</li>
                    </ol>
                    
                    <p>Since a single perceptron cannot solve the XOR problem, this single perceptron will be designed to classify an AND gate.</p>
                    <Chapter title="Chapter 3.1: The dataset">
                        <p>Before working at its full potential, a neural network will require training. In the training phase, we feed data with a known result into the network and we compare (via an error function) the expected output to what the networks output is. We then adjust the weights proportional to the error to get the overall average error as low as possible. Here's the error function I chose to use:</p>
                        <SyntaxHighlighter language="python" wrapLines={true} showLineNumbers={true} style={darcula}>
                            {`def error_function(predicted, actual):
    return actual - predicted`.replaceAll("	", "")}
                        </SyntaxHighlighter>
                        <p>I found this error function to be quite effective in training the network and it persisted to my multi-level network even though I've read that some prefer to use a mean squared error function.</p>
                        <p>As for the dataset, I initially coded a system to randomly generate a given number of inputs. This was a bad idea. There can be a maximum of 4 inputs for the XOR problem so any extra repeated inputs is a waste of training data.</p>

                    </Chapter>
                    <Chapter title="Chapter 3.2: Coding the perceptron's framework">
                        <p>So let's start with the random inputs part: To avoid having to mentally imagine the brain-juicing reality of multi-dimensional arrays, I chose to utilise classes for organization sake.</p>
                    </Chapter>
                </Chapter>
            </div>
        </body>
        </>
    )
}

{/* <SyntaxHighlighter language="python" wrapLines={true} showLineNumbers={true}>
                        {`import numpy as np

                        class NeuralNetwork:
                            def __init__(self, input_size, hidden_size, output_size):
                                self.weights_input_hidden = np.random.rand(input_size, hidden_size)
                                self.weights_hidden_output = np.random.rand(hidden_size, output_size)
                                self.bias_hidden = np.random.rand(hidden_size)
                                self.bias_output = np.random.rand(output_size)

                            def sigmoid(self, x):
                                return 1 / (1 + np.exp(-x))    `.replaceAll("                        ", "")}
                        </SyntaxHighlighter> */}

export default NeuralNetBlog