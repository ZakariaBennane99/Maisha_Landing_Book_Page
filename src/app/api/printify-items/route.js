import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const apiToken = process.env.PRINTIFY_API_TOKEN;
    const response = await axios.get('https://api.printify.com/v1/shops/18023896/products.json', {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
      },
    });

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.error('Error fetching Printify items:', error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Failed to fetch items', details: error.response?.data || error.message },
      { status: error.response?.status || 500 }
    );
  }
}
